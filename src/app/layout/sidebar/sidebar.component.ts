import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // 👈 IMPORTANTE

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule        // 👈 AGREGA ESTO
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }
}
