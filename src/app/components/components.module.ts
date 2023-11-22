import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalenderComponent } from './calender/calender.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { PopoverComponent } from '../modals/popover/popover.component';
import { ModalComponent } from '../modals/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CalenderComponent,
    ReceiptComponent,
    PopoverComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CalenderComponent,
    ReceiptComponent,
    PopoverComponent,
    ModalComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}