"use client";

import React, { useState, useRef, useEffect } from "react";
import Key from "./Key";

// Web Audio API hook
function useMechKeySound() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    audioCtxRef.current = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    fetch("/sounds/mech-key.wav")
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => audioCtxRef.current!.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        bufferRef.current = audioBuffer;
      });
  }, []);

  const play = () => {
    if (audioCtxRef.current && bufferRef.current) {
      const source = audioCtxRef.current.createBufferSource();
      source.buffer = bufferRef.current;
      source.connect(audioCtxRef.current.destination);
      source.start(0);
    }
  };

  return play;
}

interface NumPadEvent {
  key: string;
  code: string;
  keyCode: number;
  which: number;
  location: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  repeat: boolean;
}

const NumPad: React.FC = () => {
  const [pressedKeys, setPressedKeys] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [keyHistory, setKeyHistory] = useState<Set<string>>(new Set());
  const playSound = useMechKeySound();

  // 넘패드 키와 위치 정보
  const keys = [
    { label: "Num Lck", row: 1, col: 1 },
    { label: "/", row: 1, col: 2 },
    { label: "*", row: 1, col: 3 },
    { label: "-", row: 1, col: 4 },
    { label: "7", row: 2, col: 1 },
    { label: "8", row: 2, col: 2 },
    { label: "9", row: 2, col: 3 },
    { label: "+", row: 2, col: 4, rowSpan: 2 },
    { label: "4", row: 3, col: 1 },
    { label: "5", row: 3, col: 2 },
    { label: "6", row: 3, col: 3 },
    { label: "1", row: 4, col: 1 },
    { label: "2", row: 4, col: 2 },
    { label: "3", row: 4, col: 3 },
    { label: "Enter", row: 4, col: 4, rowSpan: 2 },
    { label: "0", row: 5, col: 1, colSpan: 2 },
    { label: ".", row: 5, col: 3 },
  ];

  // 마우스 클릭용 핸들러 분리
  const handleMouseDown = (key: string) => {
    setPressedKeys((prev) => ({ ...prev, [key]: true }));
    setKeyHistory((prev) => new Set(prev).add(key));
    playSound();
  };

  const handleMouseUp = (key: string) => {
    setPressedKeys((prev) => ({ ...prev, [key]: false }));
  };

  // 키보드 이벤트로 넘패드 반응
  useEffect(() => {
    const getDisplayKeyFromEvent = (event: NumPadEvent): string => {
      switch (event.code) {
        case "Numpad0":
          return "0";
        case "Numpad1":
          return "1";
        case "Numpad2":
          return "2";
        case "Numpad3":
          return "3";
        case "Numpad4":
          return "4";
        case "Numpad5":
          return "5";
        case "Numpad6":
          return "6";
        case "Numpad7":
          return "7";
        case "Numpad8":
          return "8";
        case "Numpad9":
          return "9";
        case "NumpadAdd":
          return "+";
        case "NumpadSubtract":
          return "-";
        case "NumpadMultiply":
          return "*";
        case "NumpadDivide":
          return "/";
        case "NumpadDecimal":
          return ".";
        case "NumpadEnter":
          return "Enter";
        case "NumLock":
          return "Num Lck";
        default:
          return "";
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!event.code.startsWith("Numpad")) return;
      event.preventDefault();
      playSound();

      const displayKey = getDisplayKeyFromEvent(event as NumPadEvent);
      if (displayKey) {
        setPressedKeys((prev) => ({ ...prev, [displayKey]: true }));
        setKeyHistory((prev) => new Set(prev).add(displayKey));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!event.code.startsWith("Numpad")) return;
      event.preventDefault();

      const displayKey = getDisplayKeyFromEvent(event as NumPadEvent);
      if (displayKey) {
        setPressedKeys((prev) => ({ ...prev, [displayKey]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [playSound]);

  return (
    <div className="flex flex-col items-center pl-2 pr-4 pt-2 pb-4 bg-gray-200 rounded-xl shadow-2xl border-2 border-gray-400">
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "repeat(4, 2.5rem)",
          gridTemplateRows: "repeat(5, 2.5rem)",
        }}
      >
        {keys.map(({ label, row, col, rowSpan, colSpan }) => (
          <div
            key={label}
            style={{
              gridRow: `${row}${rowSpan ? ` / span ${rowSpan}` : ""}`,
              gridColumn: `${col}${colSpan ? ` / span ${colSpan}` : ""}`,
            }}
            onMouseDown={() => handleMouseDown(label)}
            onMouseUp={() => handleMouseUp(label)}
            onMouseLeave={() => handleMouseUp(label)}
          >
            <Key
              label={label === "Enter" ? "Entr" : label}
              isPressed={pressedKeys[label] || false}
              wasPressed={keyHistory.has(label)}
              className="w-full h-full text-base"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumPad;
