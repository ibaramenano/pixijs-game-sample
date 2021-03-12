import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ backgroundColor: 0x1099bb });

document.body.appendChild(app.view);
const basicText = new PIXI.Text('Pixi.js Game Sample.');
basicText.x = 50;
basicText.y = 100;
app.stage.addChild(basicText);