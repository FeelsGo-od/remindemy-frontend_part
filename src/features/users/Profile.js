import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

export default function Profile ({id}) {
    // *** this code is not "dry" -> ps. refactor it
    const dispatch = useDispatch()

    const usersStatus = useSelector(state => state.users.status)
    const dataFetchedRef = useRef(false)

    useEffect(() => {
        if(dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        if(usersStatus === 'idle') {
            dispatch(fetchUsers())
        }
    }, [usersStatus, dispatch])

    let topics
    const currentUser = useSelector(state => [...state.users.users].find(user => user._id === id))

    if(usersStatus === 'loading') {
        topics = 'Loading...'
    } else if (usersStatus === 'succeeded') {
        if(Object.keys(currentUser.topics).length !== 0) {
            topics = currentUser.topics.map((topic) => (
                <p>{topic}</p>
            ))
        } else {
            topics = `You do not have topics at the moment`
        }
    }

    return (
        <div className="pt-23">{topics}</div>
    )
}