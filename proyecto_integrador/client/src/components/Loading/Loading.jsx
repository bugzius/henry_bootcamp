import styled,{ css } from "styled-components";

const LoaderComponent = styled.div`
    ${(props) => {
        if(props.type === 'full'){
            return css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                height: 100vh;
                width: 100vw;

                display: grid;
                align-items: center;
                
                background: rgba(0,0,0,0.6);
            `;
        }
    }}
    padding: 10px;
    display: flex;
    justify-content: center;

    z-index: 100;

    & .loader {
        display: block;
        width: 72px;
        height: 72px;
        position: relative;
        border-radius: 50%;
        box-shadow: -10px 8px 0 18px inset #a8dcff,
                    0 1px 5px rgba(0,0,0,0.3);
        animation: rotate 2s ease-in infinite alternate;
    }
    & .loader::before {
        content: '';
        position: absolute;
        left: 14px;
        bottom: 16px;
        background: #91ff00;
        box-shadow: 0 1px 5px rgba(0,0,0,0.3);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        animation: scale 1s ease-in infinite alternate;
    }
    @keyframes rotate {
        100% { transform: rotate(750deg)}
    }
    @keyframes scale {
        100% { transform: scale(0.4) translateY(5px)}
    }
`;

const Loading = (props) => {
    return (
        <LoaderComponent type={props.type}>
            <span className="loader"></span>
        </LoaderComponent>
    );
}

export default Loading;