import {json, LoaderArgs } from "@remix-run/node";
import { Form,useLoaderData } from "@remix-run/react";
import MembershipCard from "~/components/MembershipCard";
import { getMemberships } from "~/models/membership.server";
import { requireUserId } from "~/session.server";
import {useUser} from "~/utils"; 


export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({memberships: await getMemberships()});
};


export default function Memberships() {
  const {memberships} = useLoaderData<typeof loader>();
  const user = useUser();

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form changed!')
  };
  console.log({ memberships });

    return (
      <div className="min-h-screen bg-blue-100 p-4">
        <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
          Membership Page
         </h1>
        <Form method="post" onChange={(event)=> handleChange(event)}>
          
        <ul className="mx-auto max-w-xl p-4">
          {memberships.map(({level, description, price})=>(
            <MembershipCard
            key={level}
            level={level}
            description={description}
            price={price}
            />
          ))}
          <li className=" mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Basic
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                1 martial art - 2 sessions per week. Monthly fee.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £25.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Intermediate
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                1 martial art - 3 sessions per week. Monthly fee.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £35.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Advanced
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                any 2 martial arts - 5 sessions per week. Monthly fee.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £45.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Elite
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                Unlimited classes
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £60.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Private martial-arts tuition
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                Your choice of martial-art
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £15.00 per hour
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Junior membership
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                Can attend all-kids martial-arts sessions.              
                </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £25.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Specialist course six week begginners self-defence course
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                2x1-hour sessions per week
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £180.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
              Use of Fitness room-per visit
            </h2>
            <dl>
        
              <dt className="bold mb-1 text-xs uppercase text-amber-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
                £6.00
              </dd>
            </dl>
          </li>
        </ul>
        </Form>
      </div>
    );
  }