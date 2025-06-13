import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [skills, setSkills] = useState(["Java", "HTML", "CSS"]);
  const [projects, setProjects] = useState([
    { title: "College Department Website", description: "Responsive website built using HTML, CSS, JS." },
    { title: "Clinic Appointment System", description: "Dynamic Web Project using Hibernate & MySQL." },
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePhoto(URL.createObjectURL(file));
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ title: "", description: "" });
    }
  };

  return (
    <div className="grid md:grid-cols-[250px_1fr] min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md p-4 md:min-h-screen">
        <h1 className="text-xl font-bold mb-4">My Portfolio</h1>
        <ul className="space-y-2 text-gray-700">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>

      <main className="p-6 space-y-8">
        <section id="profile" className="space-y-4">
          <h2 className="text-2xl font-semibold">Profile Photo</h2>
          <div className="flex items-center space-x-4">
            {profilePhoto && (
              <img src={profilePhoto} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
            )}
            <label className="flex items-center cursor-pointer gap-2 text-blue-600">
              <UploadCloud size={20} /> Upload Photo
              <input type="file" onChange={handlePhotoUpload} hidden />
            </label>
          </div>
        </section>

        <section id="skills" className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add new skill"
              className="max-w-xs"
            />
            <Button onClick={handleAddSkill}><PlusCircle className="mr-2" size={16} /> Add</Button>
          </div>
        </section>

        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <Card key={idx} className="shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <Input
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Project Title"
            />
            <Textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Project Description"
            />
            <Button className="md:col-span-2" onClick={handleAddProject}><PlusCircle className="mr-2" size={16} /> Add Project</Button>
          </div>
        </section>

        <section id="resume">
          <h2 className="text-2xl font-semibold mb-2">Resume</h2>
          <p className="text-sm text-gray-600">Add downloadable link or embedded resume preview here.</p>
          <div className="mt-4 p-4 bg-white rounded-xl shadow-md">Coming soon...</div>
        </section>
      </main>
    </div>
  );
}
