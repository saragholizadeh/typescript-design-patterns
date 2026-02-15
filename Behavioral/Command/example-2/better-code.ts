interface PlayerState {
  clickPlay(): void;
  clickLock(): void;
  clickNext(): void;
  clickPrevious(): void;
}

class AudioPlayer {
  private state: PlayerState;
  public playing: boolean = false;

  constructor() {
    this.state = new ReadyState(this);
  }

  changeState(state: PlayerState) {
    this.state = state;
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickLock() {
    this.state.clickLock();
  }

  clickNext() {
    this.state.clickNext();
  }

  clickPrevious() {
    this.state.clickPrevious();
  }

  startPlayback() {
    console.log("Start playing.");
    this.playing = true;
  }

  stopPlayback() {
    console.log("Stop playing.");
    this.playing = false;
  }

  nextSong() {
    console.log("Next song.");
  }

  previousSong() {
    console.log("Previous song.");
  }
}

// Concrete States

class ReadyState implements PlayerState {
  constructor(private player: AudioPlayer) {}

  clickPlay() {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }

  clickLock() {
    console.log("Locking player...");
    this.player.changeState(new LockedState(this.player));
  }

  clickNext() {
    this.player.nextSong();
  }

  clickPrevious() {
    this.player.previousSong();
  }
}

class PlayingState implements PlayerState {
  constructor(private player: AudioPlayer) {}

  clickPlay() {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
  }

  clickLock() {
    console.log("Locking player...");
    this.player.changeState(new LockedState(this.player));
  }

  clickNext() {
    this.player.nextSong();
  }

  clickPrevious() {
    this.player.previousSong();
  }
}

class LockedState implements PlayerState {
  constructor(private player: AudioPlayer) {}

  clickPlay() {
    console.log("Player is locked.");
  }

  clickLock() {
    console.log("Unlocking player...");
    if (this.player.playing) {
      this.player.changeState(new PlayingState(this.player));
    } else {
      this.player.changeState(new ReadyState(this.player));
    }
  }

  clickNext() {
    console.log("Player is locked.");
  }

  clickPrevious() {
    console.log("Player is locked.");
  }
}

// usage

const player = new AudioPlayer();

player.clickPlay();   // Ready → Playing
player.clickLock();   // Playing → Locked
player.clickPlay();   // Locked → ignored
player.clickLock();   // Locked → Playing


// Instead of: if (state === "X") , We now have: this.state.clickPlay()
// Behavior changes automatically when the state object changes.