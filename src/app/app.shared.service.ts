import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class SharedService {
    constructor() {
        console.log('shared service init');
    }
    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();

    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // Service message commands
    announceMission(mission: string) {
        console.log(mission);
        this.missionAnnouncedSource.next(mission);
    }

    confirmMission(astronaut: string) {
        console.log(astronaut);
        this.missionConfirmedSource.next(astronaut);
    }
}