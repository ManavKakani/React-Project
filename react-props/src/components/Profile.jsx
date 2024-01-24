import Avtar from "./Avtar";


export default function Profile({ name, ...rest }) {
    return (
        <div>
            <Avtar {...rest} />
            {/* <h1>{name}</h1> */}
        </div>
    );
}
