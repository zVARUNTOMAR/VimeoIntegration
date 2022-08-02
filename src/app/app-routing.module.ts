import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndComponent } from './_components/end/end.component';
import { VideocontainerComponent } from './_components/videocontainer/videocontainer.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideocontainerComponent,
  },
  {
    path: 'end',
    component: EndComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
