class Image {
  constructor(private filename: string) {
    this.load();
  }

  private load() {
    console.log(`Loading image ${this.filename} from disk`);
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

// usage
const img1 = new Image("photo.png");
img1.display();

const img2 = new Image("photo.png");
img2.display();

/*
PROBLEMS:
- Heavy object is created immediately
- Same image loaded multiple times
- Client tightly coupled to implementation
*/
