/**
 * Created by plter on 7/26/16.
 */

import Display from "org/osdg/game2d/display/Display";

class Rectangle extends Display {


    constructor(width, height, color) {
        super();

        this._width = width;
        this._height = height;
        this._color = color;
    }

    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }


    /**
     *
     * @param {CanvasRenderingContext2D} context2d
     */
    onDraw(context2d) {
        context2d.fillStyle = this._color;
        context2d.fillRect(-this.regX, -this.regY, this._width, this._height);
    }


    hitTestPoint(globalX, globalY) {
        return globalX > this.getGlobalX() - this.regX &&
            globalY > this.getGlobalY() - this.regY &&
            globalX < this.getGlobalX() + this._width - this.regX &&
            globalY < this.getGlobalY() + this._height - this.regY;
    }
}

export default Rectangle;