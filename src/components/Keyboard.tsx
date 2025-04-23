"use client";

import React, { useEffect, useState } from "react";
import Key from "./Key";

const Keyboard: React.FC = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [keyHistory, setKeyHistory] = useState<Set<string>>(new Set());

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
      return "Right Shift"; // 기본값으로 왼쪽 Shift 반환
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
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.code === "CapsLock") {
        setPressedKeys((prev) => new Set(prev).add("Caps Lock"));
        setTimeout(() => {
          setPressedKeys((prev) => {
            const newSet = new Set(prev);
            newSet.delete("Caps Lock");
            return newSet;
          });
        }, 150);
        setKeyHistory((prev) => new Set(prev).add("Caps Lock"));
        return;
      }

      // const displayKey =
      //   e.code === "ShiftLeft"
      //     ? "Left Shift"
      //     : e.code === "ShiftRight"
      //     ? "Right Shift"
      //     : e.code === "ControlLeft"
      //     ? "Left Ctrl"
      //     : e.code === "ControlRight"
      //     ? "Right Ctrl"
      //     : e.code === "AltLeft"
      //     ? "Left Alt"
      //     : e.code === "AltRight"
      //     ? "Right Alt"
      //     : e.code === "MetaLeft"
      //     ? "Left Win"
      //     : e.code === "MetaRight"
      //     ? "Right Win"
      //     : getDisplayKey(e.key);
      const displayKey = getDisplayKeyFromEvent(e);
      setPressedKeys((prev) => new Set(prev).add(displayKey));
      setKeyHistory((prev) => new Set(prev).add(displayKey));
      console.log(
        "Key pressed:",
        e.key,
        "Code:",
        e.code,
        "Display key:",
        displayKey
      ); // 디버깅용
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.code === "CapsLock") return;

      // const displayKey =
      //   e.code === "ShiftLeft"
      //     ? "Left Shift"
      //     : e.code === "ShiftRight"
      //     ? "Right Shift"
      //     : e.code === "ControlLeft"
      //     ? "Left Ctrl"
      //     : e.code === "ControlRight"
      //     ? "Right Ctrl"
      //     : e.code === "AltLeft"
      //     ? "Left Alt"
      //     : e.code === "AltRight"
      //     ? "Right Alt"
      //     : e.code === "MetaLeft"
      //     ? "Left Win"
      //     : e.code === "MetaRight"
      //     ? "Right Win"
      //     : getDisplayKey(e.key);
      const displayKey = getDisplayKeyFromEvent(e);
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(displayKey);
        return newSet;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

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
    <div className="flex flex-col items-start p-2 bg-gray-100 rounded-xl shadow-2xl">
      {/* Function Keys */}
      <div className="flex w-full gap-1">
        <div>
          {escKey.map((key) => (
            <Key
              key={key}
              label={key}
              isPressed={pressedKeys.has(key)}
              wasPressed={keyHistory.has(key)}
            />
          ))}
        </div>
        <div className="flex gap-11">
          <div className="flex">
            {functionKeys1.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>
          <div className="flex">
            {functionKeys2.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>
          <div className="flex">
            {functionKeys3.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>
          <div className="flex">
            {functionKeys4.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
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
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>

          <div className="flex">
            {secondRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>

          <div className="flex">
            {thirdRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>

          <div className="flex">
            {fourthRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
              />
            ))}
          </div>

          <div className="flex">
            {fifthRow.map((key) => (
              <Key
                key={key}
                label={key}
                isPressed={pressedKeys.has(key)}
                wasPressed={keyHistory.has(key)}
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
                  isPressed={pressedKeys.has(key)}
                  wasPressed={keyHistory.has(key)}
                />
              ))}
            </div>
            <div className="flex">
              {specialKeys2.map((key) => (
                <Key
                  key={key}
                  label={key}
                  isPressed={pressedKeys.has(key)}
                  wasPressed={keyHistory.has(key)}
                />
              ))}
            </div>
          </div>

          {/* Arrow Keys */}
          <div className="flex flex-col items-center mt-12">
            <Key
              key="↑"
              label="↑"
              isPressed={pressedKeys.has("↑")}
              wasPressed={keyHistory.has("↑")}
            />
            <div className="flex">
              <Key
                key="←"
                label="←"
                isPressed={pressedKeys.has("←")}
                wasPressed={keyHistory.has("←")}
              />
              <Key
                key="↓"
                label="↓"
                isPressed={pressedKeys.has("↓")}
                wasPressed={keyHistory.has("↓")}
              />
              <Key
                key="→"
                label="→"
                isPressed={pressedKeys.has("→")}
                wasPressed={keyHistory.has("→")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
