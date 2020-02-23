
/* TODO:      I need to be more careful with variable scoping - 
   right now site slows down when visitor clicks home a bunch of times because
   I'm creating new engines as opposed to re-connecting to currently running
   ones */

function loadCartpole() {
    Matter.use('matter-attractors');
    engine = Matter.Engine.create(),
    world = engine.world;
    render = Matter.Render.create({
    element: document.getElementById('cartpole'),
    engine: engine,
    options: {
        width: 800,
        height: 410,
        wireframes: false,
        background: '#ffffff'
        }
    });
    var trackCategory = 0x0001,
    cartCategory = 0x0002,
    pendulumCategory = 0x0004;

    Matter.Render.run(render);
    var runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    myTrack = Matter.Bodies.rectangle(400, 250, 800, 50, {isStatic:true, collisionFilter: { mask: trackCategory } });
    myCart = Matter.Composites.car(395, 205, 200, 39, 20, {friction:0,frictionAir:0});
    myCart.bodies[0].collisionFilter.category = cartCategory;
    myCart.bodies[1].render.visible = false;
    myCart.bodies[2].render.visible = false;
    myPendulum = Matter.Bodies.circle(400, 10, 10, { 
        collisionFilter: { mask: pendulumCategory }, 
        frictionAir: 0,
    })

    var constraint = Matter.Constraint.create({
        bodyA: myCart.bodies[0],
        pointA: { x: 0, y: 0 },
        bodyB: myPendulum,
        pointB: { x: 0, y: 0 }
    });
    constraint.render.strokeStyle = myPendulum.render.fillStyle;
    constraint.render.lineWidth = 4;

    Matter.World.add(world, [
        Matter.Bodies.rectangle(400, 160, 800, 50, { isStatic: true }),
        Matter.Bodies.rectangle(800, 200, 50, 100, { isStatic: true }),
        Matter.Bodies.rectangle(0, 200, 50, 100, { isStatic: true }),
        Matter.Bodies.rectangle(400, -5, 800, 10, { isStatic: true }),
        Matter.Bodies.rectangle(400, 605, 800, 10, { isStatic: true }),
        Matter.Bodies.rectangle(850, 300, 50, 600, { isStatic: true }),
        Matter.Bodies.rectangle(-50, 300, 50, 600, { isStatic: true }),
        myTrack,
        myCart, 
        myPendulum, 
        constraint,
    ]);

    Matter.Body.set( myCart.bodies[0], {
        plugin: {
        attractors: [
            function() {
                Matter.Body.applyForce(myCart.bodies[0], myCart.bodies[0].position, { x: (400-myCart.bodies[0].position.x)/300000.0, y: 0 });
            }
        ]}
    });

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
};
