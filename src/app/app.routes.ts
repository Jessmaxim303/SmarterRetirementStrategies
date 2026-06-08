import { Routes } from '@angular/router';

import { Contact } from "./contact/contact";
import { Privacy } from "./privacy/privacy";
import { Home } from "./home/home";

import { Webinar } from "./webinar/webinar";
import { WebinarLanding } from "./webinar-landing/webinar-landing";
import { Team } from "./team/team";


export const routes: Routes = [
    { path: '', component: Home, },
    { path: 'contact', component: Contact, },
    { path: 'privacy', component: Privacy, },
    { path: 'webinar', component: Webinar, },
    { path: 'webinar-landing', component: WebinarLanding, },
		{ path: 'your-staff', component: Team, }
];
