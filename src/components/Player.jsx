import { useState, useRef, useEffect } from "react";

function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const inputRef = useRef(null);
  const previousNameRef = useRef(playerName);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleSave() {
    if (playerName === "") {
      setPlayerName(previousNameRef.current);
    }
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSave();
    }
  }

  function handleEditClick() {
    if (isEditing) {
      handleSave();
    } else {
      previousNameRef.current = playerName;
      setPlayerName("");
      setIsEditing(true);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnText = isEditing ? "Save" : "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        ref={inputRef}
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnText}</button>
    </li>
  );
}

export default Player;
