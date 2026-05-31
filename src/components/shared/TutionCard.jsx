import { IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { Link } from "react-router";

const TutionCard = ({ tution }) => {

    const {
        _id,
        classGrade,
        district,
        area,
        subjects,
        daysPerWeek,
        preferredTime,
        tutoringMode,
        expectedSalary,
        tutionStatus,
        // medium,
        // tutorGender,
        // tutorType,
        // specialInstructions,
        // createdAt
    } = tution;

    const subjectList = subjects?.split(',').map(s => s.trim());

    return (
        <>
            {/* ——— Card ——— */}
            <div className="card border border-neutral-200 hover:border-primary hover:shadow-xl hover:scale-105 transition duration-150">
                <div className="card-body gap-3">

                    {/* Top */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-[16px] font-semibold">{classGrade}</h2>
                            <p className="text-md text-neutral-600 mt-0.5">📍 {district} · {area}</p>
                        </div>
                        <span className="badge badge-success badge-soft text-xs">{tutionStatus}</span>
                    </div>

                    <div className="divider my-0"></div>

                    {/* Subject tags */}
                    <div className="flex flex-wrap gap-2">
                        <h1 className="text-sm font-semibold text-neutral-600 mt-0.5">Subjects:</h1>
                        {subjectList?.map((s, i) => (
                            <span key={i} className="badge badge-ghost text-xs capitalize">{s}</span>
                        ))}
                    </div>

                    {/* Quick meta */}
                    <div className="grid grid-cols-1 gap-2 text-sm text-neutral-600">
                        <span>📅 {daysPerWeek}</span>
                        <span>🕐 {preferredTime}</span>
                        <span>🏠 {tutoringMode}</span>
                    </div>

                    <div className="divider my-0"></div>

                    {/* Salary + button */}
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">
                            ৳{expectedSalary} <span className="text-sm font-normal text-neutral-600">/ month</span>
                        </p>
                        <Link to={`/tutions/${_id}`} className="btn btn-sm btn-primary shadow-none">
                            See details
                            <IoIosArrowForward />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TutionCard;