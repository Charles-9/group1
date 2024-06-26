import { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from '../components/ui/alert-dialog'

const PopupDialog = () => {
    const [isRedeemed, setIsRedeemed] = useState(false)
    return (
        <AlertDialog>
            {isRedeemed ? (
                <div className="text-gray-400">Redeemed</div>
            ) : (
                <AlertDialogTrigger className="px-2 py-1 bg-accent text-white rounded-sm">
                    Redeem
                </AlertDialogTrigger>
            )}

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogDescription>
                        Are you sure you want to redeem this free trip for your
                        next bus trip?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className='flex flex-col-reverse  justify-left align-center'>
                    <AlertDialogCancel className="bg-transparent underline text-gray-600">
                        Maybe later
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-primary text-white w-24 mx-auto"
                        onClick={() => setIsRedeemed(true)}
                    >
                        Yes!
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PopupDialog
