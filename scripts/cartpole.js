var engine = Matter.Engine.create(),
world = engine.world;
var render = Matter.Render.create({
element: document.getElementById('cartpole'),
engine: engine,
options: {
    width: 800,
    height: 600,
    wireframes: false,
    background: '#aaaaaa'
}
});
var trackCategory = 0x0001,
cartCategory = 0x0002,
pendulumCategory = 0x0004;

Matter.Render.run(render);
var runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);

Matter.World.add(world, [
Matter.Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
Matter.Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
Matter.Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
Matter.Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
]);

myTrack = Matter.Bodies.rectangle(400, 300, 800, 50, {isStatic:true, collisionFilter: { mask: trackCategory } });
myCart = Matter.Composites.car(395, 200, 200, 39, 20, {frictionAir:0});
myCart.bodies[0].collisionFilter.category = cartCategory;
myCart.bodies[1].render.visible = false;
myCart.bodies[2].render.visible = false;
myPendulum = Matter.Bodies.circle(400, 0, 10, { collisionFilter: { mask: pendulumCategory },
    frictionAir: 0, })

var constraint = Matter.Constraint.create({
bodyA: myCart.bodies[0],
pointA: { x: 0, y: 0 },
bodyB: myPendulum,
pointB: { x: 0, y: 0 }
});

Matter.World.add(world, [myTrack, myCart, myPendulum, constraint] )

var mouse = Matter.Mouse.create(render.canvas),
mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Matter.World.add(world, mouseConstraint);
render.mouse = mouse;
mouseConstraint.collisionFilter.mask = cartCategory;