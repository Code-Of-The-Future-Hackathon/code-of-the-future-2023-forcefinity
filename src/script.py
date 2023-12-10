
for i in range(0, 18):
    print(
f"{round(i * (100 / 17))}% " + "{\n",
f"  background-image: url(../../images/kikky-idle/frame00{i:02d}.png);\n" + "}\n",
    end=""
    )