import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HashCreateComponent } from './hash-create/hash-create.component';
import { ImportFileComponent } from './import/import-file.component';
import { UserGridComponent } from './user-grid/user-grid.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "hash-create", component: HashCreateComponent} ,
  {path: "import-file", component: ImportFileComponent},
  {path: "user-grid", component: UserGridComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }