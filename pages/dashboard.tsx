import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import MenuBar from "../components/MenuBar";
import {Card, TodoCard, GoalsCard, MealsCard, InsurancesCard, InvestmentsCard, IncomeExpensesCard} from "../components/Cards";
import { appwrite, todoState, userState } from "../store/global";
import { User } from "../store/types";
import { getJWT, setJWT } from "../utils/jwt";
import Icon from "../components/Icon";

const Dashboard = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useRecoilState(todoState);
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();


  // Conditional Rendering 

  // const [selectedScreen, setSelectedScreen] = useState('home');
  // const renderScreen = () => {
  //   switch (selectedScreen) {
  //     case 'home':
  //       return <Home />;
  //     case 'about':
  //       return <About />;
  //     case 'contact':
  //       return <Contact />;
  //     default:
  //       return null;
  //   }
  // };

  const addTodo = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const jwt = await getJWT();
    const res = await fetch("/api/todos", {
      method: "post",
      headers: {
        JWT: jwt,
      },
      body: JSON.stringify({
        user: user.$id,
        todo: {
          content: currentTodo,
          isComplete: false,
        },
      }),
    });
    const json = await res.json();
    setTodos(todos.concat(json));
    setCurrentTodo("");
  };

  const logout = async () => {
    await appwrite.account.deleteSession("current");
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("jwt_expire");
    router.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const jwt = await getJWT();
      const res = await fetch("/api/todos", {
        method: "get",
        headers: {
          JWT: jwt,
        },
      });
      const json = await res.json();
      setTodos(json.documents);
      setIsLoading(false);
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    if (user) return;
    const fetchData = async () => {
      const response = await appwrite.account.get();
      setUser(response as User);
    };
    fetchData();
  }, []);

  
  // Placeholder data for other cards
  const upcomingGoals = [
    { id: 1, title: "Goal 1", description: "Description for Goal 1" },
    { id: 2, title: "Goal 2", description: "Description for Goal 2" },
    // Add more goals as needed
  ];

  const incomeExpensesData = {
    income: 5000,
    expenses: 3000,
    // Add more details as needed
  };

  const investments = [
    { id: 1, name: "Investment 1", amount: 1000 },
    { id: 2, name: "Investment 2", amount: 2000 },
    // Add more investments as needed
  ];

  const insurances = [
    { id: 1, name: "Insurance 1", premium: 50 },
    { id: 2, name: "Insurance 2", premium: 75 },
    // Add more insurances as needed
  ];

  const meals = [
    { id: 1, name: "Meal 1", calories: 300 },
    { id: 2, name: "Meal 2", calories: 500 },
    // Add more meals as needed
  ];

  return (
    <div className="flex h-screen">
    {/* Left Vertical Menu Bar */}
    <MenuBar />

    {/* Right Content Grid */}
    <div className="flex flex-col w-4/5 p-8 overflow-y-scroll">
      <h2 className="text-lg font-bold mb-2 text-gray-600" style={{ fontFamily: "raleway" }}>
        Hola {user?.name} 👋️,
      </h2>
      <div className="flex mb-4">
        <h1 className="text-2xl font-bold mr-2 text-gray-800" style={{ fontFamily: "raleway" }}>
          Life Compass
        </h1>
        <Icon name="DraftingCompass" />
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {/* Todo Card */}
        <Card title="Todos" content={<TodoCard currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} addTodo={addTodo} todos={todos} />} />

        {/* Upcoming Goals Card */}
        <Card title="Upcoming Goals" content={<GoalsCard goals={upcomingGoals} />} />

        {/* Income Expenses Card */}
        <Card title="Income & Expenses" content={<IncomeExpensesCard data={incomeExpensesData} />} />

        {/* Investments Card */}
        <Card title="Investments" content={<InvestmentsCard investments={investments} />} />

        {/* Insurances Card */}
        <Card title="Insurances" content={<InsurancesCard insurances={insurances} />} />

        {/* Meals Card */}
        <Card title="Meals" content={<MealsCard meals={meals} />} />
      </div>
    </div>
  </div>
);
}


export default Dashboard;