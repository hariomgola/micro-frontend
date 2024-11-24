import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const _remoteUrl = (_data: String | number) =>
  `http://localhost:${_data}/remoteEntry.js`;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: _remoteUrl(4300),
        remoteName: 'mfeApp',
        exposedModule: './ContentModule',
      })
        .then((m) => m.ContentModule)
        .catch((err) => console.log(err));
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
