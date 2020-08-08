import { NgModule } from '@angular/core';
import { FirebasedataComponent } from './firebasedata.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';

const appRoutes : Routes = [
{ path : 'firebase', canActivate:[AuthGuard], component : FirebasedataComponent },
]
@NgModule({
    declarations:[FirebasedataComponent, AlertErrorComponent],
    imports:[BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    exports:[FirebasedataComponent]
})

export class firebaseModule{}