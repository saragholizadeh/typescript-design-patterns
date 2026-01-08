interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.load();
  }

  private load() {
    console.log(`Loading image ${this.filename} from disk`);
  }

  display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}

class ImageProxy implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }

    this.realImage.display();
  }
}

// usage
const img1: Image = new ImageProxy("photo.png");
img1.display();

const img2: Image = new ImageProxy("photo.png");
img2.display();