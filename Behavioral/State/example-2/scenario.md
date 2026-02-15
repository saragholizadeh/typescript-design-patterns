# Example: Audio Player State Handling

We are building a simple audio player.

The player can be in one of the following states:

- Ready (player is ready but not playing)

- Playing

- Locked

### Buttons:

- clickPlay()

- clickLock()

- clickNext()

- clickPrevious()

### Rules

1. If Locked → most buttons do nothing
2. If Ready → Play starts playback
3. If Playing → Play stops playback
4. Lock toggles between Locked and previous logical state


## Files

- **bad-code.ts**: The messy version. Do **not** use this one.  
- **better-code.ts**: The clean and proper version. Use this one :)  
