document.write('<h1>Estadisticas centro médico ñuñoa</h1>');

let dental = [
    {
      "HORA": "8:30",
      "ESPECIALISTA": "ANDREA ZUÑIGA",
      "PACIENTE": "MARCELA RETAMAL",
      "RUT": "11123425-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "MARIA PIA ZAÑARTU",
      "PACIENTE": "ANGEL MUÑOZ",
      "RUT": "9878789-2",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "SCARLETT WITTING",
      "PACIENTE": "MARIO KAST",
      "RUT": "7998789-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:00",
      "ESPECIALISTA": "FRANCISCO VON TEUBER",
      "PACIENTE": "KARIN FERNANDEZ",
      "RUT": "18887662-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:30",
      "ESPECIALISTA": "EDUARDO VIÑUELA",
      "PACIENTE": "HUGO SANCHEZ",
      "RUT": "17665461-4",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "14:00",
      "ESPECIALISTA": "RAQUEL VILLASECA",
      "PACIENTE": "ANA SEPULVEDA",
      "RUT": "14441281-0",
      "PREVISION": "ISAPRE"
    }
  ]
  let traumatologia = [
    {
      "HORA": "8:00",
      "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
      "PACIENTE": "PAULA SANCHEZ",
      "RUT": "15554774-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "10:00",
      "ESPECIALISTA": "RAUL ARAYA",
      "PACIENTE": "ANGÉLICA NAVAS",
      "RUT": "15444147-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "10:30",
      "ESPECIALISTA": "MARIA ARRIAGADA",
      "PACIENTE": "ANA KLAPP",
      "RUT": "17879423-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "ALEJANDRO BADILLA",
      "PACIENTE": "FELIPE MARDONES",
      "RUT": "1547423-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "CECILIA BUDNIK",
      "PACIENTE": "DIEGO MARRE",
      "RUT": "16554741-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "12:00",
      "ESPECIALISTA": "ARTURO CAVAGNARO",
      "PACIENTE": "CECILIA MENDEZ",
      "RUT": "9747535-8",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "12:30",
      "ESPECIALISTA": "ANDRES KANACRI",
      "PACIENTE": "MARCIAL SUAZO",
      "RUT": "11254785-5",
      "PREVISION": "ISAPRE"
    }
  ];
  let radiologia = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
  ];
  

  //DENTAL

  document.write('<h3>Dental</h3>')

  //Cantidad de consultas
  document.write(`<p>Cantidad de consultas: ${dental.length}<br></p>`)

  // Primer paciente 
  document.write(`<p>Primer paciente: ${dental[0].RUT} - ${dental[0].PREVISION}<br></p>`)
  
  // Último paciente
  document.write(`<p>Último paciente: ${dental[dental.length - 1].RUT} - ${dental[dental.length - 1].PREVISION}<br></p>`)



  //TRAUMATOLOGÍA

  document.write('<h3>Traumatología</h3>')

  //Cantidad de consultas
  document.write(`<p>Cantidad de consultas: ${traumatologia.length}<br></p>`)

  //Primer paciente
  document.write(`<p>Primer paciente: ${traumatologia[0].RUT} - ${traumatologia[0].PREVISION}<br></p>`)

  //Último paciente
  document.write(`<p>Último paciente: ${traumatologia[traumatologia.length - 1].RUT} - ${traumatologia[traumatologia.length - 1].PREVISION}</p>`)


  //Radiología

  document.write(`<h3>Radiología</h3>`)

  //Cantidad de consultas
  document.write(`<p>Cantidad de consultas: ${radiologia.length}</p>`)

  //Primer paciente
  document.write(`<p>Primer paciente: ${radiologia[0].RUT} - ${radiologia[0].PREVISION}</p>`)

  //Último paciente
  document.write(`<p>Últmo paciente: ${radiologia[radiologia.length - 1].RUT} - ${radiologia[radiologia.length - 1].PREVISION}</p>`)