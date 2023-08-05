import './Message.css'

const Message = () => {
    return (
        <div className='bgImageC py-16'>
            
            <div className="mb-10">
            <p className="text-yellow-600 italic mb-3">Message</p>
            <h2 className="text-3xl uppercase font-semibold mb-8">Ready to start Message?</h2>
                <form>
                    <div className="mb-2">
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-opacity-10 w-96 text-white mb-2  rounded-3xl" /> <br />
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered bg-opacity-10 w-96 text-white mb-2 rounded-3xl" /> <br />
                    </div>
                    <textarea name="message" placeholder="Write Your Message..." className="input input-bordered w-96 bg-opacity-10 text-white h-24 rounded-3xl" rows={4} cols={53} />
                    <div>
                        <input className="btn normal-case rounded-3xl border-purple-700 border-b-4 text-amber-900 mt-2" type="submit" value="Submit Now" />
                    </div>
                </form>
            </div>
               
        </div>
      
    );
};

export default Message;