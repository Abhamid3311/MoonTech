import { useAddCommentMutation, useGetCommentQuery } from '@/redux/features/products/productsApi';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';


const ReviewDetails = ({ id }) => {
    const [comment, setComment] = useState('');
    const { data: getComment, isLoading } = useGetCommentQuery(id);
    const [postComment, { isLoading: isCommenting }] = useAddCommentMutation();
    const { data: session } = useSession();



    //Handle Comment Form
    const handleCommentForm = (e) => {
        e.preventDefault();
        // console.log(comment)

        if (!session.user.email) {
            toast.info("Please login For comment Here!");
            return
        }

        const data = {
            name: session.user.email,
            comment: comment
        }

        postComment({ id, data })
            .unwrap()
            .then((response) => {
                // console.log('Comment added successfully', response);
                toast.success("Comment Added Successfully!");

            })
            .catch((error) => {
                console.error('Error adding Comment', error);
                toast.error("Comment Added Failed!")
            });

        e.target.reset();
    };


    return (
        <div className=''>
            <form onSubmit={handleCommentForm}>
                <div className="w-full" id="textarea">
                    <textarea
                        placeholder="Leave a comment..."
                        onChange={(e) => setComment(e.target.value)}
                        required rows={2}
                        className='w-full border border-gray-300 focus:ring-primary focus:border-primary rounded-md' />
                </div>
                <button disabled={isCommenting} type='submit' className='bg-primary text-white px-3 py-1 rounded-[5px]  font-semibold '> {isCommenting ? "Commenting" : "Comment"}</button>
            </form>

            <div className='mt-8'>
                <h3 className='text-base lg:text-lg font-bold  mb-2' >Comments:</h3>
                {
                    !isLoading ?
                        getComment?.length !== 0 && getComment?.map((rev, index) => <div key={index} className='flex items-center gap-2 mb-3'>
                            <FaUserCircle className="text-2xl text-primary" />
                            <div>
                                <p className="text-base lg:text-lg  " >{rev.name}</p>
                                <p className='text-sm lg:text-base text-gray-500'>{rev.comment}</p>
                            </div>
                        </div>) : <p>Loading....</p>
                }

                {getComment?.length === 0 && null}
            </div>
        </div>

    )
};


export default ReviewDetails;