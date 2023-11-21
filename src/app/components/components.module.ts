import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalenderComponent } from './calender/calender.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CalenderComponent,
    ReceiptComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CalenderComponent,
    ReceiptComponent
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