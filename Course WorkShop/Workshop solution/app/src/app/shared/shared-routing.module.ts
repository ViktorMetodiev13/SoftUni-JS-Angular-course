import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
    // {
    //     path: '/not-found',
    //     component: NotFoundPageComponent
    // }
];

export const SharedRoutingModule = RouterModule.forChild(routes);