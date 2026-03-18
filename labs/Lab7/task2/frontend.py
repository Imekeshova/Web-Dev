from developer import Developer


class FrontendDeveloper(Developer):
    def __init__(self, name, experience, salary, framework):
        super().__init__(name, experience, salary)
        self.framework = framework

    def code(self):
        return f"{self.name} is building UI with {self.framework}."

    def design_ui(self):
        return f"{self.name} designs interfaces."