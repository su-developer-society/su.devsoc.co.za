"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Joystick, Sparkles, Cpu, Bot, Wrench, Factory, LayoutGrid, Shield, BatteryCharging, PackageSearch, RadioTower } from "lucide-react";

const tracks = [
  {
    title: "Game Development",
    icon: <Joystick className="h-6 w-6 text-purple-300" />,
    items: [
      "Engines: Unity, Unreal, Godot; art via Blender and texture tools.",
      "Languages: C#, C++, GDScript; focus on performance and gameplay loops.",
      "SA scene: indie studios, educational games, local storytelling; game jams on campus.",
      "Pipelines: version control, scene prefabs, lighting basics, build automation.",
    ],
  },
  {
    title: "Robotics",
    icon: <Bot className="h-6 w-6 text-purple-300" />,
    items: [
      "Platforms: ROS2, simulation first (Gazebo/Ignition), then hardware.",
      "Hardware: depth cameras, LiDAR, motor controllers; test in contained areas.",
      "SA context: agriculture drones, warehouse movers, mining automation pilots.",
      "Skills: localization, mapping, navigation stacks, safety stops and watchdogs.",
    ],
  },
  {
    title: "Embedded Systems",
    icon: <Cpu className="h-6 w-6 text-purple-300" />,
    items: [
      "MCUs: Arduino, ESP32, Raspberry Pi; toolchains with PlatformIO.",
      "Electronics: KiCad for PCBs, basic sensors/actuators, power budgets.",
      "Connectivity: Wi‑Fi, BLE, LoRa for campus-scale sensing.",
      "SA context: smart metering, cold-chain monitors, remote irrigation nodes.",
    ],
  },
];

const tools = [
  { icon: <LayoutGrid className="h-5 w-5 text-purple-200" />, text: "Engines & Art: Unity, Unreal, Godot, Blender." },
  { icon: <Wrench className="h-5 w-5 text-purple-200" />, text: "Tooling: PlatformIO, KiCad, ROS2 build tools, CI for firmware." },
  { icon: <Factory className="h-5 w-5 text-purple-200" />, text: "Domains: warehouse robotics, agriculture drones, mining inspection." },
  { icon: <PackageSearch className="h-5 w-5 text-purple-200" />, text: "Testing: simulation first, hardware-in-loop, regression on maps/worlds." },
  { icon: <RadioTower className="h-5 w-5 text-purple-200" />, text: "Comm: MQTT, REST/gRPC backends, OTA updates with rollbacks." },
];

export default function GameDevRoboticsEmbeddedPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Game Dev, Robotics & Embedded</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Three connected tracks for Stellenbosch builders: immersive games, autonomous robots, and resilient embedded devices serving South African needs.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <div key={track.title} className="flex h-full flex-col gap-3 border border-purple-800 bg-black/80 p-5">
                <div className="flex items-center gap-3 text-purple-100">
                  {track.icon}
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{track.title}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  {track.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <Sparkles className="h-6 w-6 text-purple-300" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em]">Tools & Practices</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <div key={tool.text} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  {tool.icon}
                  <span>{tool.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <BatteryCharging className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Hardware Safety</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• Batteries: use proper chargers, fire-safe storage, no unattended charging.</li>
                <li>• Soldering and tools: ventilation, eye protection, tidy benches.</li>
                <li>• Lab rules: no radio tests without clearance; keep logs of firmware flashes.</li>
                <li>• Mechanical: emergency stops, kill-switches, supervised tests only.</li>
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Shield className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">SA Examples</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• Mining: inspection rovers and sensor nodes for safety monitoring.</li>
                <li>• Agriculture: drones for crop scouting; soil moisture nodes for irrigation.</li>
                <li>• Warehousing: AMRs for shelf moves; barcode scanning with vision.</li>
                <li>• Indie games: local history, languages, and art for SA audiences.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
