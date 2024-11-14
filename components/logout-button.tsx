'use client';
import {MouseEvent} from "react"
import {Button} from "@nextui-org/react";
import {signOutAction} from "@/app/actions";

function LogoutButton() {
    return (
        <>
            <Button radius="full" size="lg" color="primary" onClick={(event: MouseEvent) => signOutAction()} className="px-16">
            Log Out
            </Button>
        </>
    );
}

export default LogoutButton;