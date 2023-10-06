import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';


const ReviewDetails = ({ Reviews }) => {
    const [comment, setComment] = useState('')




    //Handle Comment Form
    const handleCommentForm = (e) => {
        e.preventDefault();
        console.log(comment)

        /*  if (!user.email) {
             toast.info("Please login For comment Here!");
             return
         }
 
         const data = {
             name: user.email,
             comment: comment
         }
 
         postComment({ bookId, data })
             .unwrap()
             .then((response) => {
                 console.log('Comment added successfully', response);
                 toast.success("Comment Added Successfully!");
                 setComment('')
             })
             .catch((error) => {
                 console.error('Error adding Comment', error);
                 toast.error("Comment Added Failed!")
             }); */
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
                    Reviews?.length !== 0 && Reviews?.map((rev, index) => <div key={index} className='flex items-center gap-2 '>
                        <FaUserCircle className="text-2xl text-primary" />
                        <div>
                            <p className="font-bold " >abc@user</p>
                            <p className='text-sm lg:text-base '>{rev.comment}</p>
                        </div>
                    </div>)
                }

                {Reviews?.length === 0 && null}
            </div>
        </div>

    )
};


export default ReviewDetails;