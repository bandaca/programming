using Microsoft.VisualStudio.TestTools.UnitTesting;
using TodoApi.Controllers;
using TodoModels;
using Microsoft.EntityFrameworkCore;
using Todo.Models;
using System.Collections.Generic;

namespace TodoModels.Test
{
    [TestClass]
    public class TodoControllerTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            var opt = new DbContextOptionsBuilder<TodoContext>().UseInMemoryDatabase("TodoList").Options;
            var ctx = new TodoContext(opt);
            var todoController = new TodoController(ctx);
            var r = (List<TodoItem>)todoController.GetAll();
            Assert.IsTrue(r.Count == 1);

        }

        [TestMethod]
        public void TestMethod2()
        {
            var opt = new DbContextOptionsBuilder<TodoContext>().UseInMemoryDatabase("TodoList").Options;
            var ctx = new TodoContext(opt);
            var todoController = new TodoController(ctx);

            ctx.TodoItems.Add(new TodoItem(){ Name = "Task 1", IsComplete = false});
            ctx.SaveChanges();
            var r = (List<TodoItem>)todoController.GetAll();
            Assert.IsTrue(r.Count == 2);

        }
    }
}
