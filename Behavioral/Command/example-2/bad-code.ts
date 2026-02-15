class AudioPlayer {
  private state: string = "Ready";
  private playing: boolean = false;

  clickPlay() {
    if (this.state === "Locked") {
      console.log("Player is locked.");
      return;
    }

    if (this.state === "Ready") {
      console.log("Start playing.");
      this.playing = true;
      this.state = "Playing";
    } else if (this.state === "Playing") {
      console.log("Stop playing.");
      this.playing = false;
      this.state = "Ready";
    }
  }

  clickLock() {
    if (this.state === "Locked") {
      console.log("Unlocking...");
      this.state = this.playing ? "Playing" : "Ready";
    } else {
      console.log("Locking player...");
      this.state = "Locked";
    }
  }

  clickNext() {
    if (this.state === "Locked") {
      console.log("Player is locked.");
      return;
    }

    console.log("Next song.");
  }

  clickPrevious() {
    if (this.state === "Locked") {
      console.log("Player is locked.");
      return;
    }

    console.log("Previous song.");
  }
}

// CLIENT
const player = new AudioPlayer();

player.clickPlay();
player.clickLock();
player.clickPlay();


/*
PROBLEMS:

- Heavy if conditions everywhere
- State logic mixed with business logic
- Hard to add new state (e.g., Paused)
- Violates Open/Closed Principle
- Code grows messy as states increase
- Imagine adding: Paused, Buffering, Error ... :)
*/