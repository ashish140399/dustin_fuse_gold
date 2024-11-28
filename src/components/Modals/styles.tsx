import styled from "styled-components";

interface ModalMainWrapperProp {
    closeiconsvgWidth?: string;
}
export interface ModalControlProps {
    type?: string;
    modalopen: boolean;
    handleModal: (
        value: boolean | ((prevModalOpen: boolean) => boolean)
    ) => void;
}

const MODAL_PADDING = 30;
export const ModalMainWrapper = styled.div<ModalMainWrapperProp>`
    position: relative;
    padding: ${MODAL_PADDING}px;
    box-sizing: border-box;
    .modalbg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .closebutton {
        border-radius: 20px;
        background: var(--Lines-Divider, #383838);
        position: absolute;
        border-radius: 50%;
        top: 0px;
        right: 0px;
        // width: ${(props) => props.closeiconsvgWidth || "26px"};
        // height: ${(props) => props.closeiconsvgWidth || "26px"};
        width: 53px;
        height: 53px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg path {
            stroke: #fff;
        }
    }
    input {
        color: #fff;
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        font-family: Conthrax;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
    }
    @keyframes bounce {
        0% {
            transform: translateY(0); /* Start and end at original position */
        }
        50% {
            transform: translateY(-10px); /* Move up */
        }
        100% {
            transform: translateY(0px); /* Move up */
        }
    }
    .transactioncompletedimg {
        animation: bounce 1.5s ease-in-out infinite;
    }
`;
export const ModalFooter = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    .buttonbottom {
        min-width: 60%;
        .btnwidth100 {
            transform: scale(0.9) translateY(10px);
            transform-origin: right;
        }
        margin-right: -${MODAL_PADDING}px;
    }
`;

export const ModalWrapper = styled.div`
    width: 100%;
    position: relative;
`;
export const ModalHeading = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    position: relative;
`;
export const ModalTitle = styled.div`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));

    /* P1/SemiBold */
    font-family: Telegraf;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
`;
export const ModalDescription = styled.div`
    color: var(--Text-Secondary, #cfcfcf);

    /* P2/Regular */
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
`;
