import TodoItem from "./todoItem";

export const Card = ({ title, content }) => (
  <div className="flex-col rounded-lg focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md flex-grow">
    <h3
      className="text-xl font-semibold m-4 text-gray-700"
      style={{ fontFamily: "raleway" }}
    >
      {title}
    </h3>
    {content}
  </div>
);

export const TodoCard = ({ currentTodo, setCurrentTodo, addTodo, todos }) => (
  <div className="m-4">
    <form onSubmit={addTodo}>
      <input
        type="text"
        className="w-full px-6 py-2 text-lg rounded-lg"
        placeholder="🤔 What to do today?"
        required={true}
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      ></input>
    </form>
    {todos.map((item) => (
      <TodoItem key={item.$id} item={item} />
    ))}
  </div>
);

export const GoalsCard = ({ goals }) => (
  <div className="m-4">
    {goals.map((goal) => (
      <div key={goal.id}>
        <h4 className="text-lg font-semibold mb-2">{goal.title}</h4>
        <p>{goal.description}</p>
      </div>
    ))}
  </div>
);

export const IncomeExpensesCard = ({ data }) => (
  <div className="m-4">
    <p>Income: ${data.income}</p>
    <p>Expenses: ${data.expenses}</p>
  </div>
);

export const InvestmentsCard = ({ investments }) => (
  <div className="m-4">
    {investments.map((investment) => (
      <div key={investment.id}>
        <h4 className="text-lg font-semibold mb-2">{investment.name}</h4>
        <p>Amount: ${investment.amount}</p>
      </div>
    ))}
  </div>
);

export const InsurancesCard = ({ insurances }) => (
  <div className="m-4">
    {insurances.map((insurance) => (
      <div key={insurance.id}>
        <h4 className="text-lg font-semibold mb-2">{insurance.name}</h4>
        <p>Premium: ${insurance.premium}</p>
      </div>
    ))}
  </div>
);

export const MealsCard = ({ meals }) => (
  <div className="m-4">
    {meals.map((meal) => (
      <div key={meal.id}>
        <h4 className="text-lg font-semibold mb-2">{meal.name}</h4>
        <p>Calories: {meal.calories}</p>
      </div>
    ))}
  </div>
);
