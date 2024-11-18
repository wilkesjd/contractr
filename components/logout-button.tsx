'use client';
import {MouseEvent} from "react"
import {Button} from "@nextui-org/react";
import {signOutAction} from "@/app/actions";

interface Props{
    buttonText: string;
}
function LogoutButton(props: Props) {
    return (
        <>
            <Button radius="full" size="lg" color="primary" onClick={(event: MouseEvent) => signOutAction()} className="px-16">
            {props.buttonText}
            </Button>
        </>
    );
}

export default LogoutButton;