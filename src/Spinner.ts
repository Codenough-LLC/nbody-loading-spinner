import Body from './thing/Body'
import Universe from './thing/Universe'
import Vector from './thing/Vector'

export const createLoadingSpinner = (svgElement: SVGElement) => {
  new Universe({
    bodies: [
      new Body({
        position: new Vector(1, 1, 1),
        velocity: new Vector(1, -1, 0)
      }),
      new Body({
        position: new Vector(-1, -1, -1),
        velocity: new Vector(-1, 1, 0)
      })
    ],
    changeCallback: () => {
      const svgElements = [] as Node[]
      svgElement.replaceChildren(...svgElements)
    }
  })
}
