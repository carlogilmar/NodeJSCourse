/*
 * Require es el estándar de CommonJS para exportar módulos en JS
 * Se necesita específicar la ruta del script de js a importar en este script
 * */
const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander("Woopa")
    expect(myMissionCommander.name).toBe("Woopa");
  });
})
