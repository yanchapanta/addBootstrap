//Import modules  router of the angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
//Import components
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

//Array of root
const appRoutes: Routes=[
	{path: '', component: AboutComponent}, 
	{path: 'sobre-mi', component: AboutComponent},
	{path: 'proyectos', component: ProjectsComponent},
	{path: 'crear-proyecto', component: CreateComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'proyecto/:id' , component:DetailComponent},
	{path: 'editar-proyecto/:id', component: EditComponent},
	{path: '**', component: AboutComponent}
];

//Export the module the router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);