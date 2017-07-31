wurzel.controller('homeController',function($scope) {
  $scope.pageTitle = "wurzel.default 2";

  $scope.panels = [
    {
      color: 'default',
      title: 'Home',
      subtitle: 'sub',
      maintext: [
        'konfiguriere die relevanten daten',
        'erstelle ein template passend zur config'
      ],
      extlinktext: '',
      extlinkhref: '',
      internlinktext: '',
      internlinkhref: '',
    },
    {
      color: 'success',
      title: 'Config',
      subtitle: 'verwaltung der einstellungen fuer die daten anzeige.',
      maintext: [
        'Edit Data -> welche eintraege werden angezeigt wenn diese bearbeitet werden.',
        'Preview Data -> in der uebersicht werden diese einstellungen gebraucht.',
        'All Data  -> alle eintraege die aus den daten benutzt werden sollen'
        ],
      extlinkhref: 'https://github.com/dexta/ikingargen',
      extlinktext: 'mehr hier',
      internlinkhref: '/config',
      internlinktext: 'zum tab'
    },
    {
      color: 'warning',
      title: 'Template',
      subtitle: 'verwalte die einzelnen templates und speicher sie im projekt',
      maintext: [
        'der template editor kann an gepasst werden (syntax,theme,fontsize)',
        'fertige schablonen an mit denen dateien befuellt werden koennen',
        'liste der variablen aus der config'
      ],
      extlinkhref: 'https://github.com/dexta/ikingargen',
      extlinktext: 'mehr zum Template',
      internlinktext: '',
      internlinkhref: '',
    },
    {
      color: 'primary',
      title: 'Data',
      subtitle: 'sub data',
      maintext: [
        'daten ubersicht',
        'daten bearbeiten',
        'daten muten',
      ],
      extlinktext: '',
      extlinkhref: '',
      internlinktext: '',
      internlinkhref: '',
    },
    {
      color: 'info',
      title: 'Job',
      subtitle: 'sub job',
      maintext: [
        'organisiere den oder die jobs',
        'hinterlege job variablen um im template weitere unterscheidungen machen zu koennen',
      ],
      extlinktext: '',
      extlinkhref: '',
      internlinktext: '',
      internlinkhref: '',
    },
    {
      color: 'danger',
      title: 'Run',
      subtitle: 'sub run',
      maintext: [
        'starten der jobs entweder einzeln/mehrere/alle',
        'export der ergebnisse bzw. download,api[git,sql]',
      ],
      extlinktext: '',
      extlinkhref: '',
      internlinktext: '',
      internlinkhref: '',
    },    
  ];
});