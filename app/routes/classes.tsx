import instructor from "~/assets/img/martial-arts-instructor.jpg";
import instructor1 from "~/assets/img/second-instructor.jpg";
import instructor2 from "~/assets/img/third-instructor.jpg";

export default function Classes() {
    return (
      <div className="min-h-screen bg-blue-100 p-4">
        <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-black-900">
          Classes Page
        </h1>
        <ul className="mx-auto max-w-xl p-4">
        
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
        
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Guy Victory (assistant maritial arts coach)
            </h2>
            <dl>
            <img
                className="h-39 w-30 object-cover"
                src={instructor}
                alt="Sonic Youth On Stage"
                />
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                2nd Dan Blackbelt in Jiu-Jitsu
                1st Dan Blackbelt in Judo   
                         
              </dt>
              <dd className="mb-3 text-neutral-600">
                Maximum 1 hour session a day.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-black-800">
                £15.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Sarah Nova (Assistant Martial arts Coach)
            </h2>
            <dl>
            <img
                className="h-39 w-30 object-cover"
                src={instructor1}
                alt="Sonic Youth On Stage"
                />
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                5th Dan Karate
              </dt>
              <dd className="mb-3 text-neutral-600">
                Maximum 5 hour session on Tuesday
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-black-800">
                £35.00 per Hour
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Mauricio Gomez (Gym owner/Head Martial arts Coach)
            </h2>
            <dl>
            <img
                className="h-39 w-30 object-cover"
                src={instructor2}
                alt="Sonic Youth On Stage"
                />
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Coaches in all Martial arts- 
                4th Dan Blackbelt in Judo-
                3rd Dan Blackbelt in Jiu-Jitsu-
                1st Dan Blackbelt in Karate-
                Accredited Muay Thai Coach
              </dt>
              <dd className="mb-3 text-neutral-600">
                Any Martial Arts Training 3.50 Hour sessions on Tuedsay - Thursday
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-black-800">
                £50 per session 
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    );
  }