import instructor from "~/assets/img/martial-arts-instructor.jpg";
import instructor1 from "~/assets/img/second-instructor.jpg";
import instructor2 from "~/assets/img/third-instructor.jpg";

export default function about() {
    return (
      <div className="min-h-screen bg-blue-100 p-4">
        <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-black-900">
            About us
        </h1>
        <ul className="mx-auto max-w-xl p-4">
        
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
        
            <h2 className="mb-4 font-serif text-2xl tracking-wide text-green-900">
            We here at Dobu Martial-arts we pride ourselves on ensuring young people get the possibilities to hang out with friends while getting exercise. Its important that young people can also learn to defend themselves as they may need it one day.
            </h2>
            <dl>
            <img
                className="h-39 w-30 object-cover"
                src={instructor}
                alt="Sonic Youth On Stage"
                />      
              
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              We have many classes here at Dobu, Jiu-Jitsu, Karate, Judo and Muay Thai. We also have a range of private tuitions and fitness sessions.
            </h2>
            <dl>
            <img
                className="h-39 w-30 object-cover"
                src={instructor1}
                alt="Sonic Youth On Stage"
                />
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              We hold many competitions many of which can be found on our facebook and twitter pages.
              https://twitter.com/DobuMartialArts
            </h2>
            <dl>
            <img
                className="h-39 w-30 object-cover"
                src={instructor2}
                alt="Sonic Youth On Stage"
                />
            </dl>
          </li>
        </ul>
      </div>
    );
  }