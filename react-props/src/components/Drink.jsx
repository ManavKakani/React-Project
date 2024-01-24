function Drink({ name }) {

    let dd1 = <dd>{'bean'}</dd>;
    if (name === 'tea') {
        dd1 = <dd>{'leaf'}</dd>
    }
    let dd2 = <dd>{'80–185 mg/cup'}</dd>;
    if (name === 'tea') {
        dd2 = <dd>{'15–70 mg/cup'}</dd>
    }

    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                {dd1}
                <dt>Caffeine content</dt>
                {dd2}
                <dt>Age</dt>
                <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
            </dl>
        </section>
    );
}

export default Drink
