import { useAddCommentMutation, useGetCommentQuery } from '@/redux/features/products/productsApi';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';


const ReviewDetails = ({ id }) => {
    const [comment, setComment] = useState('');
    const { data: getComment, isLoading } = useGetCommentQuery(id);
    const [postComment, { isLoading: isCommenting }] = useAddCommentMutation();


    console.log(getComment)




    //Handle Comment Form
    const handleCommentForm = (e) => {
        e.preventDefault();
        console.log(comment)

        if (!user.email) {
            toast.info("Please login For comment Here!");
            return
        }

        const data = {
            name: user.email,
            comment: comment
        }

        postComment({ id, data })
            .unwrap()
            .then((response) => {
                console.log('Comment added successfully', response);
                toast.success("Comment Added Successfully!");
                setComment('')
            })
            .catch((error) => {
                console.error('Error adding Comment', error);
                toast.error("Comment Added Failed!")
            });
    };


    return (
        <div className=''>
            <form onSubmit={handleCommentForm}>
                {/* <h1 className='font-bold'>Leave a comment</h1> */}
                <div className="w-full" id="textarea">
                    <textarea
                        placeholder="Leave a comment..."
                        onChange={(e) => setComment(e.target.value)}
                        required rows={2}
                        className='w-full border border-gray-300 focus:ring-primary focus:border-primary rounded-md' />
                </div>
                <button type='submit' className='bg-primary text-white px-3 py-1 rounded-[5px]  font-semibold '>Comment</button>
            </form>

            <div className='mt-8'>
                <h3 className='text-base lg:text-lg font-bold  mb-2' >Comments:</h3>
                {
                    !isLoading ?
                        getComment?.length !== 0 && getComment?.map((rev, index) => <div key={index} className='flex items-center gap-2 '>
                            <FaUserCircle className="text-2xl text-primary" />
                            <div>
                                <p className="font-bold " >abc@user</p>
                                <p className='text-sm lg:text-base '>{rev.comment}</p>
                            </div>
                        </div>) : <p>Loading....</p>
                }

                {getComment?.length === 0 && null}
            </div>
        </div>

    )
};


export default ReviewDetails;