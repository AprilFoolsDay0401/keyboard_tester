"use client";

import React, { useEffect, useState, useRef } from "react";
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

// 브라우저의 표준 KeyboardEvent를 사용하되, 필요한 경우 확장
interface CustomKeyboardEvent extends KeyboardEvent {
  // 추가적인 속성이 필요한 경우 여기에 정의
}

const Keyboard: React.FC = () => {
  const [pressedKeys, setPressedKeys] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [keyHistory, setKeyHistory] = useState<Set<string>>(new Set());
  const playSound = useMechKeySound();

  const getDisplayKey = (key: string): string => {
    const keyMap: { [key: string]: string } = {
      " ": "Space",
      ControlLeft: "Left Ctrl",
      ControlRight: "Right Ctrl",
      Meta: "Win",
      ArrowUp: "↑",
      ArrowDown: "↓",
      ArrowLeft: "←",
      ArrowRight: "→",
      Escape: "Esc",
      PrintScreen: "PrtSc",
      ScrollLock: "Scroll Lock",
      Pause: "Pause Break",
      PageUp: "Page Up",
      PageDown: "Page Down",
      CapsLock: "Caps Lock",
      ShiftLeft: "Left Shift",
      ShiftRight: "Right Shift",
      Insert: "Insert",
      Help: "Insert",
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      e: "E",
      f: "F",
      g: "G",
      h: "H",
      i: "I",
      j: "J",
      k: "K",
      l: "L",
      m: "M",
      n: "N",
      o: "O",
      p: "P",
      q: "Q",
      r: "R",
      s: "S",
      t: "T",
      u: "U",
      v: "V",
      w: "W",
      x: "X",
      y: "Y",
      z: "Z",
    };

    if (key === "Shift") {
      return "Right Shift"; // 기본값으로 오른쪽 Shift 반환
    }
    return keyMap[key] || key;
  };

  const getDisplayKeyFromEvent = (e: KeyboardEvent): string => {
    switch (e.code) {
      case "ShiftLeft":
        return "Left Shift";
      case "ShiftRight":
        return "Right Shift";
      case "ControlLeft":
        return "Left Ctrl";
      case "ControlRight":
        return "Right Ctrl";
      case "AltLeft":
        return "Left Alt";
      case "AltRight":
        return "Right Alt";
      case "MetaLeft":
        return "Left Win";
      case "MetaRight":
        return "Right Win";
      case "Insert":
        return "Insert";
      case "CapsLock":
        return "Caps Lock";
      default:
        return getDisplayKey(e.key === "Help" ? "Insert" : e.key);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Tab 키의 기본 동작(포커스 이동)을 방지
      if (event.key === "Tab") {
        event.preventDefault();
      }

      // Esc 키의 기본 동작(시스템 소리)을 방지 (특히 사파리)
      if (event.key === "Escape") {
        event.preventDefault();
      }

      const key = getDisplayKeyFromEvent(event);
      if (key) {
        playSound();
        setPressedKeys((prev) => ({ ...prev, [key]: true }));
        setKeyHistory((prev) => new Set(prev).add(key));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // Tab 키의 기본 동작(포커스 이동)을 방지
      if (event.key === "Tab") {
        event.preventDefault();
      }

      // Esc 키의 기본 동작(시스템 소리)을 방지 (특히 사파리)
      if (event.key === "Escape") {
        event.preventDefault();
      }

      const key = getDisplayKeyFromEvent(event);
      if (key) {
        setPressedKeys((prev) => ({ ...prev, [key]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [playSound]);

  // 마우스 클릭용 핸들러 추가
  const handleMouseDown = (key: string) => {
    setPressedKeys((prev) => ({ ...prev, [key]: true }));
    setKeyHistory((prev) => new Set(prev).add(key));
    playSound();
  };

  const handleMouseUp = (key: string) => {
    setPressedKeys((prev) => ({ ...prev, [key]: false }));
  };

  // 키보드 레이아웃
  const escKey = ["Esc"];
  const functionKeys1 = ["F1", "F2", "F3", "F4"];
  const functionKeys2 = ["F5", "F6", "F7", "F8"];
  const functionKeys3 = ["F9", "F10", "F11", "F12"];
  const functionKeys4 = ["PrtSc", "Scroll Lock", "Pause Break"];

  const firstRow = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ];
  const secondRow = [
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    "\\",
  ];
  const thirdRow = [
    "Caps Lock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ";",
    "'",
    "Enter",
  ];
  const fourthRow = [
    "Left Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    "Right Shift",
  ];
  const fifthRow = [
    "Left Ctrl",
    "Left Win",
    "Left Alt",
    "Space",
    "Right Alt",
    "Right Win",
    "Right Ctrl",
  ];

  const specialKeys1 = ["Insert", "Home", "Page Up"];
  const specialKeys2 = ["Delete", "End", "Page Down"];

  return (
    <div className="flex flex-col items-start p-2 bg-gray-200 rounded-xl shadow-2xl border-2 border-gray-400">
      {/* Function Keys */}
      <div className="flex w-full gap-2">
        <div>
          {escKey.map((key) => (
            <Key
              key={key}
              label={key}
              isPressed={pressedKeys[key] || false}
              wasPressed={keyHistory.has(key)}
              onMouseDown={() => handleMouseDown(key)}
              onMouseUp={() => handleMouseUp(key)}
              onMouseLeave={() => handleMouseUp(key)}
            />
          ))}
        </div>
        <div className="flex gap-10">
          <div className="flex">
            {functionKeys1.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>
          <div className="flex">
            {functionKeys2.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>
          <div className="flex">
            {functionKeys3.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>
          <div className="flex">
            {functionKeys4.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Keyboard and Special Keys */}
      <div className="flex gap-8">
        {/* Main Keyboard */}
        <div className="flex flex-col">
          <div className="flex ">
            {firstRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>

          <div className="flex">
            {secondRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>

          <div className="flex">
            {thirdRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>

          <div className="flex">
            {fourthRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>

          <div className="flex">
            {fifthRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys[key] || false}
                wasPressed={keyHistory.has(key)}
                onMouseDown={() => handleMouseDown(key)}
                onMouseUp={() => handleMouseUp(key)}
                onMouseLeave={() => handleMouseUp(key)}
              />
            ))}
          </div>
        </div>

        {/* Special Keys and Arrow Keys */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex ">
              {specialKeys1.map((key) => (
                <Key
                  key={key}
                  label={key}
                  isPressed={pressedKeys[key] || false}
                  wasPressed={keyHistory.has(key)}
                  onMouseDown={() => handleMouseDown(key)}
                  onMouseUp={() => handleMouseUp(key)}
                  onMouseLeave={() => handleMouseUp(key)}
                />
              ))}
            </div>
            <div className="flex">
              {specialKeys2.map((key) => (
                <Key
                  key={key}
                  label={key}
                  isPressed={pressedKeys[key] || false}
                  wasPressed={keyHistory.has(key)}
                  onMouseDown={() => handleMouseDown(key)}
                  onMouseUp={() => handleMouseUp(key)}
                  onMouseLeave={() => handleMouseUp(key)}
                />
              ))}
            </div>
          </div>

          {/* Arrow Keys */}
          <div className="flex flex-col items-center mt-12">
            <Key
              key="↑"
              label="↑"
              isPressed={pressedKeys["↑"] || false}
              wasPressed={keyHistory.has("↑")}
              onMouseDown={() => handleMouseDown("↑")}
              onMouseUp={() => handleMouseUp("↑")}
              onMouseLeave={() => handleMouseUp("↑")}
            />
            <div className="flex">
              <Key
                key="←"
                label="←"
                isPressed={pressedKeys["←"] || false}
                wasPressed={keyHistory.has("←")}
                onMouseDown={() => handleMouseDown("←")}
                onMouseUp={() => handleMouseUp("←")}
                onMouseLeave={() => handleMouseUp("←")}
              />
              <Key
                key="↓"
                label="↓"
                isPressed={pressedKeys["↓"] || false}
                wasPressed={keyHistory.has("↓")}
                onMouseDown={() => handleMouseDown("↓")}
                onMouseUp={() => handleMouseUp("↓")}
                onMouseLeave={() => handleMouseUp("↓")}
              />
              <Key
                key="→"
                label="→"
                isPressed={pressedKeys["→"] || false}
                wasPressed={keyHistory.has("→")}
                onMouseDown={() => handleMouseDown("→")}
                onMouseUp={() => handleMouseUp("→")}
                onMouseLeave={() => handleMouseUp("→")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
