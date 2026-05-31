import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";


const TutorCard = ({ tutor }) => {
    const { _id, name, email, image } = tutor;

    return (
        <div className="card border border-neutral-200 hover:border-primary hover:shadow-xl hover:scale-105 transition duration-150">
            <div className="card-body items-center text-center gap-3 p-5">

                {/* Profile picture */}
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-base-200">
                        <img
                            src={image}
                            alt={name}
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                    <p className="text-sm text-neutral-600 mt-0.5">{email}</p>
                </div>

                <span className="badge badge-info badge-soft text-sm">Tutor</span>

                <div className="divider my-0 w-full"></div>

                <Link
                    Link to={`/users/${email}`}
                    className="btn btn-sm btn-primary w-full">
                    View profile
                    <IoIosArrowForward></IoIosArrowForward>
                </Link>

            </div>
        </div>
    );
};

export default TutorCard;