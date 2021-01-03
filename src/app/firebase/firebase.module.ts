import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


const fireBase =[
  AngularFireModule,
  AngularFirestoreModule,
  AngularFireAuthModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    fireBase
    
  ]
})
export class FirebaseModule { }
