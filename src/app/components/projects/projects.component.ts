import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Training Management System ',
      description: 'A platform designed for efficient scheduling and resource management of training sessions within a bank.',
      link: 'https://github.com/LinaMesrati/PlateformeFormations_AmenBank',
      image: '../../../assets/src/train.jpeg',
      album: [
        '../../../assets/src/train.jpeg',
        '../../../assets/src/train1.jpeg',
        '../../../assets/src/train2.jpeg',
        '../../../assets/src/train3.jpeg',
        '../../../assets/src/train4.jpeg',
      ],
      technologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
      showTechnologies: true // This property will control the visibility of technologies
    },
    {
      name: 'Online Book Sale Library (SymBook)',
      description: 'A platform designed to connect book enthusiasts by enabling the seamless buying and selling of books.',
      link: 'https://github.com/LinaMesrati/Symbook',
      image: '../../../assets/src/book.jpeg',
      album: [
        '../../../assets/src/book.jpeg',
        '../../../assets/src/book1.jpeg',
        '../../../assets/src/book2.jpeg',
        '../../../assets/src/book3.jpeg',
        '../../../assets/src/book4.jpeg',
        '../../../assets/src/book5.jpeg',
        '../../../assets/src/book6.jpeg',
        '../../../assets/src/book7.jpeg',
    
      ],
      technologies: ['Symfony', 'PHP', 'MySQL', 'HTML', 'CSS'],
      showTechnologies: true // This property will control the visibility of technologies
    },
    {
      name: 'Course Management in Education (Study Stack)',
      description: 'A Unified Platform for Educational Communication and Course Management',
      link: 'https://github.com/LinaMesrati/StudyStack',
      image: '../../../assets/src/book.jpeg',
      album: [
        '../../../assets/src/s1.png',
        '../../../assets/src/s2.png',
        '../../../assets/src/s3.png',
        '../../../assets/src/s4.png',
        '../../../assets/src/s5.png',
        '../../../assets/src/s6.png',
        '../../../assets/src/s7.png',
    
      ],
      technologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
      showTechnologies: true // This property will control the visibility of technologies
    }
  ];

  selectedImage: string | null = null;
  currentImageIndex: number | null = null;

  // Toggle the visibility of technologies for each project
  toggleTechnologies(project: any) {
    project.showTechnologies = !project.showTechnologies;
  }


  selectedImageIndex: number = -1;

    // Logic to open modal
    openModal(image: string, index: number): void {
      this.selectedImage = image; // Cette ligne est maintenant valide car selectedImage peut être 'string' ou 'null'
      this.selectedImageIndex = index;
      document.addEventListener('keydown', this.onKeyDown);
    }
  
    // Logic to close modal
    closeModal(): void {
      this.selectedImage = null;  // Vous pouvez maintenant assigner 'null' ici
      this.selectedImageIndex = -1;
      document.removeEventListener('keydown', this.onKeyDown);
    }
  
    // Handling keyboard navigation
    onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        this.navigateImage('next');
      } else if (event.key === 'ArrowLeft') {
        this.navigateImage('prev');
      }
    };
  
    // Logic to navigate images
    navigateImage(direction: 'prev' | 'next'): void {
      if (this.selectedImageIndex !== -1) {
        const project = this.projects.find(p => p.album.includes(this.selectedImage ?? ''));
        const totalImages = project ? project.album.length : 0;
        if (direction === 'next') {
          this.selectedImageIndex = (this.selectedImageIndex + 1) % totalImages;
        } else {
          this.selectedImageIndex = (this.selectedImageIndex - 1 + totalImages) % totalImages;
        }
        this.selectedImage = project?.album[this.selectedImageIndex] || null;
      }
    }
  }