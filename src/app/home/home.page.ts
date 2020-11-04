import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = [];

  constructor() {

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2674/user/icon/eduhub/f2?rev=535499',
      name: 'Edwin Antonio',
      number: '311-118-0994',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2736/user/icon/eduhub/f2?rev=938352',
      name: 'Martin Alejandro',
      number: '687-194-1615',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/1650/user/icon/eduhub/f2?rev=562307',
      name: 'Martinez Almejo',
      number: '311-300-1816',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/1618/user/icon/eduhub/f2?rev=804920',
      name: 'David Saul',
      number: '311-174-0340',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/1631/user/icon/eduhub/f2?rev=666368',
      name: 'Daniel Enrique',
      number: '311-122-6348',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2756/user/icon/eduhub/f2?rev=815837',
      name: 'Enrique Ortiz',
      number: '311-257-6460',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/37275/user/icon/eduhub/f2?rev=1057437',
      name: 'Missael Lopez',
      number: '311-263-6307',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2673/user/icon/eduhub/f2?rev=541487',
      name: 'Miguel Leopoldo',
      number: '311-121-6030',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2738/user/icon/eduhub/f2?rev=164560',
      name: 'Jonathan Israel',
      number: '311-350-1207',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://scontent.ftpq1-1.fna.fbcdn.net/v/t31.0-1/c53.0.320.320a/p320x320/10531311_319927861498895_7096022428278720718_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEq39htqxn3lwxlsaWsCbT6nvP41LEeeDie8_jUsR54OEtrYOZPnyA8BsiJIY9UiSqnlrqjrzueJDqTqrVAyeNd&_nc_ohc=vKGWdN1j7d0AX9-k6_1&_nc_ht=scontent.ftpq1-1.fna&tp=27&oh=833de52026f7c011e44bf5921d990acc&oe=5FC83952',
      name: 'Oscar Rodriguez',
      number: '311-162-8786',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2702/user/icon/eduhub/f2?rev=900791',
      name: 'Adriana FLores',
      number: '311-235-8516',
      description: 'Ingeniera en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2730/user/icon/eduhub/f2?rev=363607',
      name: 'Martin Alejandro',
      number: '311-156-3507',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2720/user/icon/eduhub/f2?rev=542135',
      name: 'Daniela Itzel',
      number: '311-143-6719',
      description: 'Ingeniero en Sistemas'
    });

    this.contacts.push({
      image: 'https://eddi2.ittepic.edu.mx/pluginfile.php/2717/user/icon/eduhub/f2?rev=900462',
      name: 'Andres Mitchel',
      number: '311-165-6715',
      description: 'Ingeniero en Sistemas'
    });



  }

}
